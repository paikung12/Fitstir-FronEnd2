export  default  {
    path : "ChallengePage",
    component : () => import('../views/Challenge Page/Templelate'),
    children : [
        {
            path : "index",
            name : "ChallengePage",
            component : () => import('../views/Challenge Page/index')
        },
    ]
}