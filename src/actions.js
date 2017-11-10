import store from './Store'

export const nextSong = (index) => {
    const play=store.getState().play;
    if(!play){
        store.setState({
            play: true
        })
    }
    store.setState({
        currentIndex: index
    })
}

export const pause = () => {
    store.setState({
        play: false
    })
}

export const changePlay = ()=>{
    const index = store.getState().currentIndex;
    if(index===-1){
        store.setState({
            currentIndex: 0
        });
    }
    const play=store.getState().play;
    store.setState({
        play: !play
    })
}

export const changeFollow = ()=>{
    const follow=store.getState().follow;
    store.setState({
        follow: !follow
    })
}