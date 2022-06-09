import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import Loading from '../../../public/images/loading.gif'
import useAuth from '../../core/hook/useAuth'

export default function ForceAuth(props) {

    const { user, loading } = useAuth()

    function renderContent() {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("session-auth")) {
                                    window.location.href = "/login"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={Loading} alt="loading" />
            </div>
        )
    }

    if (!loading && user?.email) {
        return renderContent()
    } else if (loading) {
        return renderLoading()
    } else {
        router.push('/login')
        return null
    }
}