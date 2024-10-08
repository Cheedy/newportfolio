import React, { useState, useEffect } from "react";

const Terminal: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const generateLog = () => {
      const actions = ["GET", "POST", "PUT", "DELETE"];
      const endpoints = [
        "/api/chedyForWork",
        "/api/chedyEnVacances",
        "/api/chedyAuCafe",
        "/api/chedyEnPause",
        "/api/chedyEnModeNinja",
        "/api/chedyBugHunting",
        "/api/chedyCodeReview",
      ];
      const statuses: { [key: string]: number } = {
        "/api/chedyForWork": 503,
        "/api/chedyEnVacances": 200,
        "/api/chedyAuCafe": 418,
        "/api/chedyEnPause": 429,
        "/api/chedyEnModeNinja": 404,
        "/api/chedyBugHunting": 302,
        "/api/chedyCodeReview": 301,
      };

      const action = actions[Math.floor(Math.random() * actions.length)];
      const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
      const status = statuses[endpoint] || 418;
      const timestamp = new Date().toISOString();

      return `${timestamp} - ${action} ${endpoint} - Status: ${status}`;
    };

    const interval = setInterval(() => {
      setLogs((prevLogs) => {
        const newLogs = [...prevLogs, generateLog()];
        return newLogs.slice(-10); // Keep only the last 10 logs
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setLogs((prevLogs) => [...prevLogs, `> ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-start">
      <div className="mb-2 self-start">
        <div className="text-white font-bold">Open to work status</div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2 animate-pulse"></div>
          <span className="text-white">Still not looking</span>
        </div>
      </div>
      <div className="bg-black text-green-400 p-4 rounded-lg shadow-lg font-mono text-sm h-[400px] w-[600px] flex flex-col">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs">chedy@portfolio:~$</div>
        </div>
        <div className="flex-grow mb-2 overflow-hidden">
          {logs.map((log, index) => (
            <div key={index} className="mb-1">
              {log}
            </div>
          ))}
        </div>
        <form onSubmit={handleInputSubmit} className="flex">
          <span className="mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-grow bg-transparent outline-none"
            placeholder="Tapez une commande..."
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
