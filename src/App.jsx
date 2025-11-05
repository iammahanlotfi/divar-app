import { BrowserRouter} from "react-router-dom";
import Router from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./configs/reactQueryConfigs";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layouts/Layout";
function App() {

  const queryClinet = new QueryClient({ defaultOptions }); 

  return (

    <QueryClientProvider client={queryClinet} >

      <BrowserRouter>
        <Layout>
        <Router/>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools/>
      
    </QueryClientProvider>
  )
}

export default App;
