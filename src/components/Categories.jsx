import { Link } from "react-router-dom";
import bedroom from '../assets/bed.png';
import livingroom from '../assets/single-sofa.png';
import kitchen from '../assets/winecellar.png';
import diningroom from '../assets/table.png';

const Categories = () => {
  return (
    <section className="categories">
        <h2>Shop by category</h2>
        <div className="categories-container">
            <Link to="bedroom">
                <section className="category-card">
                    <img src={bedroom} alt="bed" />
                    <p>bedroom</p>
                </section> 
            </Link>
            <Link to="livingroom">
                <section className="category-card">
                    <img src={livingroom} alt="single sofa" />
                    <p>living room / office</p>
                </section>   
            </Link>
            <Link to="kitchen">
                <section className="category-card">
                    <img src={kitchen} alt="wine cellar" />
                    <p>kitchen</p>
                </section>  
            </Link>
            <Link to="diningroom">
                <section className="category-card">
                    <img src={diningroom} alt="dining table" />
                    <p>dining room</p>
                </section>
            </Link>   
        </div>
    </section>
  )
}

export default Categories;