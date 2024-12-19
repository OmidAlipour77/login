import {Head, Link, router} from '@inertiajs/react'
import AuthLayout from "../../Layouts/AuthLayout.jsx";
import FormBuilder from "../../Components/Form/FormBuilder.jsx";
import {emailValidation, passwordValidation} from "../../Helpers/validationRulesHelper.js";
import {RequestHelpers} from "../../Helpers/RequestHelpers.js";

export default function Login($props) {
    const fields = [
        {name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', rules: emailValidation()},
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Enter your password',
            rules: passwordValidation()
        },
    ];
    const handleSubmit = async (values) => {
        try {
            let res = await RequestHelpers.post('/login', values);
            if (res?.status === 'ok') {
                localStorage.setItem('username', res?.data?.email);
                router.visit('/register')
            }
        } catch (e) {

        }
    };

    return (
        <AuthLayout title={'Welcome Back'} description={'Login to your premium account'}>
            <Head title="Login"/>
            <FormBuilder buttonText={'Login'} fields={fields} onSubmit={handleSubmit}/>
            <div className="text-center mt-8">
                <p className="text-gray-800">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-primary hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </AuthLayout>
    )
}
