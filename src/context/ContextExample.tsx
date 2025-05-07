import React, { createContext, useContext, useState } from "react";

interface TicketContextProps {
  tickets: string[];
  fetchTickets: () => Promise<void>;
  selectedTicket: string | null;
  setSelectedTicket: (tickets: string) => void;
}

const TicketContext = createContext<TicketContextProps | undefined>(undefined);

export const TicketContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [tickets, setTickets] = useState<string[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const fetchTickets = async () => {
    // const tickets = await getAssignedRecords();
    const tickets = ["Ticket 1", "Ticket 2", "Ticket 3"]; // Mocked data for demonstration
    if (tickets && tickets.length > 0) {
      setTickets(tickets);
    } else {
      setTickets([]);
    }
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        fetchTickets,
        selectedTicket,
        setSelectedTicket,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = (): TicketContextProps => {
  const context = useContext(TicketContext);
  if (!context)
    throw new Error(
      "useTicketContext must be used within a TicketContextProvider",
    );
  return context;
};
