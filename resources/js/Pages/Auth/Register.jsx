import {Head, Link, router} from '@inertiajs/react'
import AuthLayout from "../../Layouts/AuthLayout.jsx";
import FormBuilder from "../../Components/Form/FormBuilder.jsx";
import {confirmPasswordValidation, emailValidation, passwordValidation} from "../../Helpers/validationRulesHelper.js";
import {RequestHelpers} from "../../Helpers/RequestHelpers.js";

export default function Register($props) {
    const fields = [
        {name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', rules: emailValidation()},
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Enter your password',
            rules: passwordValidation()
        },
        {
            name: 'password_confirmation',
            label: 'Confirm Password',
            type: 'password',
            placeholder: 'Enter your password',
            rules: confirmPasswordValidation('password')
        },
    ];
    const handleSubmit = async (values) => {
        try {
            let res = await RequestHelpers.post('/register', values);
            if (res?.status === 'ok') {
                localStorage.setItem('username', res?.data?.email);
                router.visit('/register')
            }
        } catch (e) {

        }
    };

    return (
        <AuthLayout title={'Create Your Account'} description={'Register for your premium account.'}>
            <Head title="Register"/>
            <FormBuilder buttonText={'Login'} fields={fields} onSubmit={handleSubmit}/>
            <div className="text-center mt-8">
                <p className="text-gray-800">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </AuthLayout>
    )
}
