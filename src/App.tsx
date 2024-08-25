import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1 style={{'margin': '0 0 40px 0'}}>Menu</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card
            id= {foodData.id? foodData.id : 0}
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
        )}
      </div>
      <button style={{"position": 'fixed', "zIndex": 1000}} onClick={handleOpenModal}>novo</button>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
    </div>
  )
}

export default App
