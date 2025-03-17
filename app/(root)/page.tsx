import { Button } from '@/components/ui/button';

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

const Homepage = () => {
  return ( 
    <>  
      <h1>Hockey Playdate</h1>
      <Button>clickster</Button>
      </>
);
}
 
export default Homepage;