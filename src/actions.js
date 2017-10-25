import store from './Store'

export const play = () => {
    
    store.setState({
        play: true
    });
}

export const nextSong = (index)=>{
    store.setState({
        currentIndex:index
    })
}