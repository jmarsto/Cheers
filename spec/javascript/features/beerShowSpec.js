import BeerShowContainer from '../../../app/javascript/react/containers/BeerShowContainer'
import ReviewContainer from '../../../app/javascript/react/containers/ReviewContainer'
import BeerTile from '../../../app/javascript/react/components/BeerTile'
import ReviewTile from '../../../app/javascript/react/components/ReviewTile'
import CommentTile from '../../../app/javascript/react/components/CommentTile'
import fetchMock from 'fetch-mock'

describe('BeerShowContainer', () => {
  let wrapper;
  let beerData;
  let reviewsData

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
          created_at: "2018-10-18T14:57:36.088Z"
        }]
      }
    }

    reviewsData={
      reviews: [{
        id: 2,
        username: "jack",
        body: "asdfsadf",
        rating: 12344,
        created_at: "2018-10-18T14:57:36.088Z",
        user: {
          id: 1,
          email: "jack@gmail.com",
          first_name: "jack",
          last_name: "jack",
          user_name: "jack",
          created_at: "2018-10-17T20:08:22.373Z",
          updated_at: "2018-10-17T20:08:22.373Z",
          age: 23
        },
        comments: [{
          username: "jack",
          id: 1,
          body: "COMMENT!",
          created_at: "2018-10-22T18:49:50.781Z",
          updated_at: "2018-10-22T18:49:50.781Z"
        }]
      }]
    }

    fetchMock.get(`/api/v1/beers/${beerData.id}`, {
      status: 200,
      body: beerData
    });

    fetchMock.get(`/api/v1/beers/${beerData.id}/reviews`, {
      status: 200,
      body: reviewsData
    })

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
         beerId: beerData.id
         })
       done()
     }, 0)
   })

   it('Review Container should render ReviewTiles', (done) => {
     setTimeout(() => {
       expect(wrapper.find(ReviewContainer).find(ReviewTile)).toBePresent()
       done()
     }, 0)
   })

   it('ReviewTiles should render Comment Tiles', (done) => {
     setTimeout(() => {
       expect(wrapper.find(ReviewContainer).find(ReviewTile).find(CommentTile)).toBePresent()
       done()
     }, 0)
   })

   it('Comment Tiles should render comments', (done) => {
     setTimeout(() => {
       expect(wrapper.text()).toMatch("COMMENT!")
       done()
     }, 0)
   })
  })
})
