import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string; 
    }
}

function SearchPage({params: {term}}: Props) {
    if (!term) notFound; 

    const termToUse = decodeURI(term);

    // API call to get teh searched movies
    // API call to get the Popular movies
  return (
    <div>welcome to the search page: {term}</div> 
  )
}

export default SearchPage