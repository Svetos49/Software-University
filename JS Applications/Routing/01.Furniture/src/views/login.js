import {html} from '../../node_modules/lit-html/lit-html.js'
import {login} from '../api/api.js'

const loginTemplate = (formSubmit) => html `
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${formSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`


export async function loginPage(ctx){
    ctx.render(loginTemplate(formSubmit))

    async function formSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const email = formData.get('email').trim()
        const password = formData.get('password').trim()

    
        if(email == '' || password == ''){
            return alert ('You must fill all fields')
        }

        await login(email, password)
        ctx.setUserNav
        ctx.page.redirect('/')

    }
}