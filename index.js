const model = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'colums', value: [
        '111111',
        '222222',
        '333333'
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''
    if (block.type === 'title') {
        html = `
             <div class="row">
                <div class="col-sm">
                    <h1>Hello World</h1>
                </div>
            </div>
        `

    }
})