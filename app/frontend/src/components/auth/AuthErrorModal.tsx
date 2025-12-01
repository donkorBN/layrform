"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "@/components/ui/Modal";
import { AlertCircle } from "lucide-react";

export default function AuthErrorModal() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const error = searchParams.get("error");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (error) {
            setIsOpen(true);
        }
    }, [error]);

    const handleClose = () => {
        setIsOpen(false);
        // Remove error param from URL without refreshing
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.delete("error");
        router.replace(`/login?${newParams.toString()}`);
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Authentication Error">
            <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4 text-red-500">
                    <AlertCircle className="w-6 h-6" />
                </div>
                <p className="text-muted-foreground mb-6">
                    {error || "An unknown error occurred. Please try again."}
                </p>
                <button
                    onClick={handleClose}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                    Try Again
                </button>
            </div>
        </Modal>
    );
}
