import React, { useState } from 'react';
import { Navbar, Button, Card } from 'react-bootstrap';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './index.css';

const App = () => {

  //Array
	const [items, setItems] = useState([
		{ id: 1,name: 'Tomate', value: 0, price: 0, unid: 120 },
		{ id: 2,name: 'Galletitas', value: 0, price: 0, unid: 250},
		{ id: 3,name: 'Latas de Atún', value: 0, price: 0, unid:  380},
		{ id: 4,name: 'Aquarius', value: 0, price: 0, unid:  270},
	]);

	const [totalItemCount, setTotalItemCount] = useState(0);
	const [totalItemTotal, setTotalItemTotal] = useState(0);


  // Funcion para remover items
			function handleRemoveItem(index) {
				const delReset = items.reduce((total, id, price, unid, value) => {
					return (
						id- 0,
						total = 0,
						unid = 0,
						price = 0,
						value = 0
						)
				}, 0);
				const copy = [...items];
				copy.splice(index, 1);
				setItems(copy);

				return (
					setTotalItemCount(delReset),
					setTotalItemTotal(delReset));
			}

      // Incrementar item x1
	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].value++;
		newItems[index].price++;

		setItems(newItems);
		calculateTotal();
		calculateTotalPrice();
	};

    // Para hacer el restart
	const retart = (index) => {
		const newItems = [...items];


		newItems[index].value=0;
		newItems[index].price= 0;

		setItems(newItems);
		calculateTotal();
		calculateTotalPrice();
	};

	// Resetea por item

	const handleReset = () => {
        const delReset = items.reduce((total, id, price, unid, value) => {
			return (
				total = 0,
				id = 0,
				unid = 0,
				price = 0,
				value = 0
				)
		}, 0);
		
		setTotalItemCount(delReset);
		setTotalItemTotal(delReset);
      };

      // Calcular el total de items en el carrito

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.value;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

  // Calcular el precio total de todo lo sumado al carrito
	const calculateTotalPrice = () => {
		const totalItemTotal = items.reduce((totalItemCount, item) => {
			return (totalItemCount + (item.price*item.unid));
		}, 0);

		setTotalItemTotal(totalItemTotal);
	};




	return (

		<div className='app-background'>
    <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand >

	<div className='total'>Cantidad de items en carrito: {totalItemCount}</div>
				<div><h4>Items disponible para su selección: {items.length} </h4></div>
				<div><h1><AddShoppingCartIcon/>Precio total ${totalItemTotal} </h1></div></Navbar.Brand>
  </Navbar>
			<div className='main-container'>
      <Button variant="primary" onClick={() => handleReset()}>reset</Button>
      <Card id='card'>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='value'>
                <span id='nombreItems'>{item.name}</span>{' '}
                <span id='price'> ${item.price*item.unid}</span>
								<span id='unidad'> Unid.{item.value} </span>
                <Card>
                <Button variant="secondary" onClick={() => handleQuantityIncrease(index)} >Incrementar
                  </Button>{' '}
                </Card>
                
                <Button onClick={() => retart(index)} variant="warning">
                    Restart
                  </Button>{' '}
                
                <Button id={item.id} onClick={() => handleRemoveItem(index)} variant="danger">
                Delete
                </Button>{' '}
              </div>
						</div>
					))}
				</div>
        </Card>
			</div>
		</div>
	);
};

export default App;
