export default async function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='container  mx-auto text-center'>{children}</main>;
}
