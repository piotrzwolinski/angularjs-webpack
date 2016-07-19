export function AppController() {
	const vm = this

	//5/ Adding a list of products to buy
	vm.products = [
		{ name: 'Milk', price: 1.05 },
		{ name: 'Salami', price: 2.5 },
		{ name: 'Bread', price: 0.85 },
	]
}