import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {

  get results() {
    let { rentals, query } = this.args;

    rentals.forEach(r => console.log('rental each', r))

    if (query) {
      console.log('query exists: ', query)
      rentals = rentals.filter((rental) => {
        console.log('rental: ', rental.title.includes(query))
        rental.title.includes(query)
      });
      console.log('rentals: ', rentals)
    }



    console.log('rentals: ', rentals)
    return rentals;
  }
}