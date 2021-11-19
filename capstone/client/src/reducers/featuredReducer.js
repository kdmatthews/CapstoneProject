const initialState = [{
    image: "https://images.unsplash.com/photo-1508802595585-a7e56c972036?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMHNwb3J0cyUyMHRlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Help Austin Get To Nationals",
    Goal: "Goal Met!",
    Description: "Our son Austin's travel ball team has won state and are on their way to Nationals. This will be a cross-country trip and one our familiy cannot currently afford. Please help us get Austin to nationals. This is such a huge opportunity for him and his team.",
    Organizer: "Tamlin Turner",
},
{
    image: "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Newborn Fighting for Life",
    Goal: "Goal Met!",
    Description: "Our newborn daughter Sasha has been diagnosed with a rare form of cancer. She has undergone five surgeries already and will be needing several more on her road to recovery. Please help us save our daughter and fight this thing together.",
    Organizer: "Nesta Archeron",
},
{
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xhc3Nyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Tablets for Third Grade",
    Goal: "Goal Met!",
    Description: "This year I have a class full of extroidinary young scholars. They are all learning a lot and many have shown a huge interest in technology. Our school currently does not have the funding to provide students with hands-on technology experiences. I would love to have a small group set of tablets for my students to explore with. Anything you can contribute helps. Thank you for your support.",
    Organizer: "Mrs. Honeybee",
}]

const Featured = (state=initialState,action) => {
    switch(action.type){
        default:
            return state
    }
}

export default Featured;