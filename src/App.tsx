import { Suspense, lazy } from "react";
import { Route } from "wouter";
import './App.css'
import { Header } from './components/Header'
// import TopStories from "./pages/TopStories";
// import Detail from "./pages/Detail";

//para que no carguen todas las paginas creamos un Lazy load que solo cargue la pagina que necesitamos
const TopStories = lazy(() => import('./pages/TopStories'))
const Detail = lazy(() => import('./pages/Detail'))

function App() {
 

  return (
    <>
     <Header />

    <Suspense fallback={null}> {/* envolvemos en un suspense los componentes para que no de error*/}
      <Route path="/" component={TopStories} />
      <Route path="/article/:id" component={Detail}/>
     </Suspense>
    </>
    
  )
}

export default App

