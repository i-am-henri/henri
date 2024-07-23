/**
 * The badge for the skill section.
 */
export default function Badge({
    children
}: {children: React.ReactNode}) {
    return (
        <div className="rounded-sm bg-popover text-popover-foreground space-x-2 border p-1 flex items-center">
            {children}
        </div>
    )
}