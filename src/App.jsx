import './App.css'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import Heading from './heading'
import Card from './card'
import { useState } from 'react'
import Navbar from './navbar';
import Footer from './footer'
function App() {
  let products = [
    {
      id: "1",
      name: "Apple iphone 15 pro",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708674273/Croma%20Assets/Communication/Mobiles/Images/300789_0_jfpv2l.png?tr=w-640",
      price: "₹1,58,990",
    },
    {
      id: "2",
      name: "Samsung S24 Ultra",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705634974/Croma%20Assets/Communication/Mobiles/Images/303840_rlonbq.png?tr=w-640",
      price: "₹1,39,999",
    },
    {
      id: "3",
      name: "Samsung Galaxy Z Flip 5",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708666993/Croma%20Assets/Communication/Mobiles/Images/275460_0_twt7q8.png?tr=w-640",
      price: "₹99,999",
    },
    {
      id: "4",
      name: "Apple Watch Series 9",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694713212/Croma%20Assets/Communication/Wearable%20Devices/Images/300965_0_bask7w.png?tr=w-640",
      price: "₹35,999",
    },
    {
      id: "5",
      name: "Samsung Galaxy Watch6",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703081985/Croma%20Assets/Communication/Wearable%20Devices/Images/275934_0_phlr5b.png?tr=w-640",
      price: "₹36,999",
    },
    {
      id: "6",
      name: "Apple Airpods pro",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694672652/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/301165_xzuxl0.png?tr=w-640",
      price: "₹19,990",
    },
    {
      id: "7",
      name: "Samsung Galaxy Buds 2 ",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1661778655/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/260679_pk8i36.png?tr=w-640",
      price: "₹7,999",
    },
    {
      id: "8",
      name: "Apple 2023 Macbook Pro M3",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698824136/Croma%20Assets/Computers%20Peripherals/Laptop/Images/302746_iz3xab.png?tr=w-640",
      price: "₹1,99,990",
    },
  ]
  const [total, setTotal] = useState(0)

  let count = ()=>{
    setTotal(total+1)
  }
  let rm = ()=>{
    setTotal(total-1)
  }
  return (
    <>
      <Navbar total={total}/>
      <Heading />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className='row'>
                {
                  products.map((product, index) => {
                    return <Card key={index} product={product} total={total} count={count} rm={rm} />
                  
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
export default App
