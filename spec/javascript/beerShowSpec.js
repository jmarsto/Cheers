import BeerShowContainer from '../../app/javascript/react/containers/BeerShowContainer'
import BeerTile from '../../app/javascript/react/components/BeerTile'
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock'

describe('BeerShowContainer', () => {

  beforeEach(() => {
    let wrapper;
    let beerData= {
      id: 1,
      name: "Budweiser",
      style: "American Lager",
      description: "Porkchop in the bottom of every can!",
      ABV: '4'}

    fetchMock.get(`/api/v1/beers/${beerData.id}`, {
      status: 200,
      body: {"body": beerData}
    });
    wrapper = mount(
      <BeerShowContainer
        params={ {
          id: beerData.id,
          name: beerData.name,
          style: beerData.style,
          description: beerData.description,
          ABV: beerData.ABV
        } }
      />
    );
  })

  afterEach(fetchMock.restore)


  it('should render the name of a specific beer on the page', () => {
    setTimeout(() => {
      expect(wrapper.find(BeerShowContainer.name).props()).toBePresent();
    }, 0)
  });

  it('should have a style on the show page', () => {
    setTimeout(() => {
      expect(wrapper.find(BeerShowContainer.style).props()).toBePresent();
    }, 0)
  });

  it('should check if the h1 tag is rendered', () => {
    setTimeout(() => {
      expect(wrapper.find('h1')).toBePresent()
    }, 0)
  });

  it('renders a paragraph tag with the beer description', () => {
    setTimeout(() => {
      expect(wrapper.find('p').toBePresent(),
      expect(wrapper.find)('p').text()).toEqual(beerData[0].description)
    }, 0)
  });
})
