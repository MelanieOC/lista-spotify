import store from './store'

export const play = () => {
    
    store.setState({
        play: true
    });
}