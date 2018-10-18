import BeerShowContainer from '../../app/javascript/react/containers/BeerShowContainer'
import BeerTile from '../../app/javascript/react/components/BeerTile'
import { shallow } from 'enzyme';

describe('BeerShowContainer', () => {
  let wrapper;
  let beerData = [{
    id: 1,
    name: "Budweiser",
    style: "American Lager",
    description: "Porkchop in the bottom of every can!",
    ABV: '4'
  }]

  beforeEach(() => {
    wrapper = mount(
      <BeerShowContainer
        id = {beerData[0].id}
        name = {beerData[0].name}
        style = {beerData[0].style}
        description = {beerData[0].description}
        ABV = {beerData[0].ABV}
      />
    )
  })

  it('should render a the name of a specific beer on the page', () => {
    expect(wrapper.find(BeerShowContainer.name)).toBePresent();
  });

  it('should have a style on the show page', () => {
  expect(wrapper.find(BeerShowContainer.style)).toBePresent();
  });

  it('should check if the h1 tag is rendered', () => {
    expect(wrapper.find('h1')).toBePresent()
  });

  it('renders a paragraph tag with the beer description', () => {
    expect(wrapper.find('p').toBePresent(),
    expect(wrapper.find)('p').text()).toEqual(beerData[0].description)
  });
})
