// import { Button } from '@/components/ui/button';
import ProductList from '@/components/shared/product/product-list';
import sampleData from '@/db/sample-data';

// // BEGIN: testing loading page; commOn/Off as needed
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const Homepage = async () => {
//   await delay(5000);
//   return ( 
//     <>  
//       <h1>Hockey Playdate</h1>
//       <Button>clickster</Button>
//       </>
// );
// };
// // END: testing loading page; 

// const Homepage = () => {
//   return ( 
//     <>  
//       <h1>Hockey Playdate</h1>
//       <Button>clickster</Button>
//       </>
// );
// }

const HomePage = () => {
  console.log(sampleData)
  return (
    <div className='space-y-8'>
      <h2 className='h2-bold'>Latest Products</h2>
      {/* <Button>clickster</Button> */}
      {/* <ProductList title='Newest Arrivals' data={sampleData.products} /> */}
      <ProductList 
      title='Newest Arrivals' 
      data={sampleData.products}
        limit={4}
       />
    </div>
  );
};
export default HomePage;
 
