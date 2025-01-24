import NavBar from '@/app/ui/xoxo/navbar';

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div className='flex h-screen flex-col'>
            <div className='w-full flex-none'>
                <NavBar />
            </div>
            <div className='flex-grow p-6'>{children}</div>
        </div>
    )
}