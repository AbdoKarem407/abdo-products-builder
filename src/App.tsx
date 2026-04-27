import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { data, formInputsList } from "./data"
import { useState } from 'react'
import Button from "./components/ui/Button"
import Input from "./components/ui/Input";
const App = () => {

  //! ===========================
  //? 🚀 STATE
  //! ===========================
  const [isOpen, setIsOpen] = useState(false)

  //! ===========================
  //? 🚀 HANDLER
  //! ===========================

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  //! ===========================
  //? 🚀Render
  //! ===========================

  const renderProductList = data.map(product =>
    <ProductCard key={product.id} product={product} />
  )

  const renderFormInputList = formInputsList.map(input => (
    <div key={input.id} className="flex flex-col">
      <label htmlFor={input.id} className="mb-[1px] text-sm font-medium text-gray-700">{input.label}</label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ))

  return (
    <>
  
      <main className="max-w-[1400px] mx-auto px-4">
        <Button
          className="bg-indigo-700 hover:bg-indigo-800"
          width="w-full"
          onClick={openModal}
        >
          ADD
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderProductList}
        </div>

        <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
         <form className="space-y-3"> {renderFormInputList}      <div className="flex items-center space-x-3">
            <Button
              className="bg-indigo-700 hover:bg-indigo-800"
              width="w-full"
            >
              submit
            </Button>

            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={closeModal}
            >
              cancel
            </Button>
          </div>
          </form> 

     
        </Modal>
      </main>
    </>
  )
}

export default App