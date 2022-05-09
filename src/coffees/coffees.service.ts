import { Injectable , NotFoundException , HttpStatus } from '@nestjs/common';
import { Coffee } from './entities/coffees.entitiy';
//import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
	private coffees: Coffee[] = [
		{
			id: 1,
			name: 'Shipwreck Roast',
			brand: 'Buddy Brew',
			flavors: ['chocolate', 'vanilla'],
		},
	];

findAll() {
	return this.coffees;
}

findOne(id: string) {
	const coffee = this.coffees.find (item => item.id === +id);
	if (!coffee) {
		throw new NotFoundException(`Coffee #${id} not found`);
	}
	return coffee;
}

create(createCoffeeDto: any) {
	this.coffees.push(createCoffeeDto);
	return createCoffeeDto;
}

update(id: string, updateCoffeDto: any) {
	const existringCoffees = this.findOne(id);
	if (existringCoffees) {
		// update the existing entity
	}
}

remove(id: string) {
	const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
	if (coffeeIndex >= 0) {
		this.coffees.splice(coffeeIndex, 1);
	}
}
}
