import BeersContainer from '../../../app/javascript/react/containers/BeersContainer'
import BeerTile from '../../../app/javascript/react/components/BeerTile'
describe('BeersContainer', () => {
  let wrapper;
  let data = [{
    id: 1,
    name: "life",
    ABV: '10000',
    description: 'its the best'
  }]
  beforeEach(() => {
    wrapper = mount(
      <BeerTile
        id = {data[0].id}
        name = {data[0].name}
        ABV = {data[0].ABV}
        description = {data[0].description}
      />
    )
  })
  it('should have a list of beers on the index page', () => {
    expect(wrapper.find(BeerTile)).toBePresent();
  });
  it('should check if the h3 tag is rendered', () => {
    expect(wrapper.find('h3')).toBePresent()
  });
  it('should have a list of beers on the index page', () => {
    expect(wrapper.find('br')).toBePresent()
  });

});
