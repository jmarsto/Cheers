import BeerShowContainer from '../../../app/javascript/react/containers/BeerShowContainer'
import BeerTile from '../../../app/javascript/react/components/BeerTile'
import ReviewContainer from '../../../app/javascript/react/containers/ReviewContainer'
import fetchMock from 'fetch-mock'

describe('BeerShowContainer', () => {
  let wrapper;
  let beerData;

  beforeEach(() => {
    beerData= {
      beer: {
        id: 2,
        name: "Very Hazy",
        style: "New England IPA",
        ABV: "8.6",
        description: "mmmmm.. this is a good beer",
        reviews: [{
          id: 2,
          username: "jack",
          body: "asdfsadf",
          rating: "12344",
          created_at: "2018-10-18T14:57:36.088Z",
          profile_photo: {
            url: null
          }
        }]
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

    it('should render the reviews of a specific beer on the page', (done) => {
      setTimeout(() => {
        debugger
        expect(wrapper.text()).toMatch(beerData.beer.reviews[0].body)
        expect(wrapper.text()).toMatch(beerData.beer.reviews[0].rating)
        expect(wrapper.text()).toMatch(beerData.beer.reviews[0].username)
        done()
      }, 0)
    })

    it('should render the review container component', (done) => {
      setTimeout(() => {
        expect(wrapper.find(ReviewContainer)).toBePresent()
        done()
      }, 0)
    })

    it('should render the review container component with correct props', (done) => {
      setTimeout(() => {
        expect(wrapper.find(ReviewContainer).props()).toEqual({
          beer: beerData.beer.name,
          reviews: beerData.beer.reviews,
          beerId: beerData.beer.id
        })
        done()
      }, 0)
    })
  })
})
