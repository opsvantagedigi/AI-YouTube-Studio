export default function JobDetailsPage({ params }: any) {
  return (
    <div>
      <h2 className="font-orbitron text-3xl mb-4">Job #{params.id}</h2>
      <p className="text-white/80">Job details will appear here.</p>
    </div>
  )
}
type Props = { params: { id: string } };

export default function JobDetails({ params }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Job {params.id}</h2>
      <p className="mt-2">Job details placeholder.</p>
    </div>
  );
}
