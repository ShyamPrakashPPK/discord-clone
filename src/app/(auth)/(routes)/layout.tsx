
const AuthLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <main className="flex items-center justify-center">
                {children}
            </main>
        </div>
    )
}

export default AuthLayout