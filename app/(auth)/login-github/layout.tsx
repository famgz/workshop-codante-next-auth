export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='container mx-auto text-center'>{children}</main>;
}
