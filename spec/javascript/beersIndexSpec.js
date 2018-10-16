import BeersContainer from '../../app/javascript/react/containers/BeersContainer'
import BeerTile from '../../app/javascript/react/components/BeerTile'
describe('BeersContainer', () => {
  let wrapper;
  let data = [{
    id: 1,
    name: "life",
    ABV: '10000'
  }]
  beforeEach(() => {
  wrapper = mount(
    <BeerTile
    id = {data[0].id}
    name = {data[0].name}
    ABV = {data[0].ABV}
    />
    )
  })
  it('should have a list of beers on the index page', () => {
  expect(wrapper.find(BeerTile)).toBePresent();
  });
});
