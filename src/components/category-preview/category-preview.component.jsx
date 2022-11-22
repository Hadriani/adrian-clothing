import { Link } from 'react-router-dom'; 

import ProductCard from '../../components/product-card/product-card.component';

import './category-preview.styles';

import { CategoryPreviewContainer } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className = 'preview'>
                {products.filter((_, idx) => idx < 4).map((products) => (<ProductCard key={products.id} product={products} />
                ))}
            </div>
        </CategoryPreviewContainer>
    )
}
    
                                   

export default CategoryPreview;