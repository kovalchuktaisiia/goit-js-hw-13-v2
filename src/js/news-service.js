import axios from "axios";

//const API_KEY = '22718353-e7d99cd9459f2a7dc2bda49f9';
const API_KEY = '22578117-98ddcf36fbc3d0da8c48aeee6&q';
const BASE_URL = 'https://pixabay.com/api';

export default class NewsApiService {
    constructor (){
        this.searchQuery = '';
        this.page = 1;
        this.totalHits = '';

    }

    async fetchArticles() {
        const url =`${BASE_URL}/?key=${API_KEY}=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=10`;
        const response = await axios.get(url);

        this.incrementPage();
        this.page +=1;
        return response.data;
        }

    incrementPage() {
        this.page += 1;
        } 
        
    resetPage () {
        this.page = 1;
    };
    
    get query() {
        return this.searchQuery;
    }
    
    set query(newQuery) {
     this.searchQuery = newQuery;
 }

}