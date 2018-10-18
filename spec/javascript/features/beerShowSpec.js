import BeerShowContainer from '../../../app/javascript/react/containers/BeerShowContainer'
import BeerTile from '../../../app/javascript/react/components/BeerTile'
import fetchMock from 'fetch-mock'

describe('BeerShowContainer', () => {
  let wrapper;
  let beerData;

  beforeEach(() => {
    beerData= {
      beer: {
        id:1,
        name:"King Julius",
        style:"New England IPA",
        ABV:"8.3",
        description: "This is the best beer ever",
        reviews:[]
      }
    }

    fetchMock.get(`/api/v1/beers/${beerData.id}`, {
      status: 200,
      body: beerData
    });

    wrapper = mount(
      <BeerShowContainer
        params={ { id: beerData.id } }
      />
    );
  })

  afterEach(fetchMock.restore)

  describe('beer show page', () => {
    it('should check if the h1 tag is rendered', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1').text()).toMatch(beerData.beer.name)
        done()
      }, 0)
    });

    it('should render the details of a specific beer on the page', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(beerData.beer.description);
        expect(wrapper.text()).toMatch(beerData.beer.ABV);
        expect(wrapper.text()).toMatch(beerData.beer.style);
        done()
      }, 0)
    });
  })
})
