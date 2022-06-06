import ItemsList from "../itemsList/itemsList";
import {Helmet} from "react-helmet";

const ListPage = ({type, category}) => {
	return (
		<>
			<Helmet>
		       <title>{category[0].toUpperCase() + category.slice(1)} of list | Movie-k Offical Site</title>
		       <meta 
		       	name="description" 
		       	content="Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience." />
		   </Helmet>
			<h2 className="movies__title">
				{category.toUpperCase()}
			</h2>
			<div className="search  _container"> 
          		<input type="text" placeholder="Search anything..."/>
            	<div className="search__button">
                	<button className="btn btn__search">Search</button>
           	 	</div>
        	</div>
			<ItemsList type={type} category={category}/> 
		</>
    )
} 

export default ListPage;