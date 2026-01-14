type Props = { params: { id: string } };

export default function JobDetails({ params }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Job {params.id}</h2>
      <p className="mt-2">Job details placeholder.</p>
    </div>
  );
}
