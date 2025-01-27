import Header from '@/app/layout/Header';
import Footer from '@/app/layout/Footer';

export default function PageLayout({ children }) {
    return (
        <main className="relative top-20 w-full min-h-[calc(100vh-120px)] bg-white flex flex-col justify-between">
            <Header />
            <div className=" py-4 px-8">
                {children}
            </div>
            <Footer />
        </main>
    );
}
