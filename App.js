import { NavigationContainer } from "@react-navigation/native";
import Router from "./navigation/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
