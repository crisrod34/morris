import ProductNamerInput from "../input/ProductNamerInput";
import ProductNamerDescription from '../text/ProductNamerDescription';

export default function ProductNamer() {
    return (
        <div>
            <ProductNamerDescription />
            <ProductNamerInput />
        </div>
    );
}