import { getForms } from '@/app/actions/dashboard'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import EmptyState from '@/components/dashboard/EmptyState'
import FormGrid from '@/components/dashboard/FormGrid'

export default async function DashboardPage() {
    const { forms, error } = await getForms()

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <DashboardHeader />

            <div className="mt-8">
                {forms && forms.length > 0 ? (
                    <FormGrid forms={forms} />
                ) : (
                    <EmptyState />
                )}
            </div>
        </div>
    )
}
