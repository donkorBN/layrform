import { getForms } from '../actions/dashboard'
import DashboardHeader from '../../components/dashboard/DashboardHeader'
import EmptyState from '../../components/dashboard/EmptyState'
import FormGrid from '../../components/dashboard/FormGrid'

export default async function DashboardPage() {
    const { forms, error } = await getForms()

    if (error) {
        return (
            <div className="p-8 max-w-7xl mx-auto">
                <DashboardHeader />
                <div className="mt-8 p-4 bg-red-50 text-red-500 rounded-lg">
                    Error loading forms: {error}
                </div>
            </div>
        )
    }

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <DashboardHeader />

            <div className="mt-8">
                {Array.isArray(forms) && forms.length > 0 ? (
                    <FormGrid forms={forms} />
                ) : (
                    <EmptyState />
                )}
            </div>
        </div>
    )
}
