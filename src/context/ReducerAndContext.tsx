import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

// Types
type State = { tickets: string[]; selectedTicket: string | null };

type Action =
  | { type: "FETCH_TICKETS"; payload: string[] }
  | { type: "SET_SELECTED_TICKET"; payload: string };

interface TicketContextProps {
  state: State;
  fetchTickets: () => Promise<void>;
  setSelectedTicket: (ticket: string) => void;
}

// Reducer
const ticketReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_TICKETS":
      return { ...state, tickets: action.payload };
    case "SET_SELECTED_TICKET":
      return { ...state, selectedTicket: action.payload };
    default:
      return state;
  }
};

// Context
const TicketContext = createContext<TicketContextProps | undefined>(undefined);

// Provider
export const TicketContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ticketReducer, {
    tickets: [],
    selectedTicket: null,
  });

  const fetchTickets = async () => {
    //   const data = await getAssignedRecords();
    const data = ["Ticket 1", "Ticket 2", "Ticket 3"]; // Mocked
    dispatch({ type: "FETCH_TICKETS", payload: data });
  };

  const setSelectedTicket = (ticket: string) => {
    dispatch({ type: "SET_SELECTED_TICKET", payload: ticket });
  };

  return (
    <TicketContext.Provider value={{ state, fetchTickets, setSelectedTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

// Hook
export const useTicketContext = (): TicketContextProps => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error(
      "useTicketContext must be used within a TicketContextProvider",
    );
  }
  return context;
};
