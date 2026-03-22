import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export const useNotifications = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [notification, setNotification] = useState<any>(null);

    useEffect(() => {
        supabase
        .from('announcements')
        .select('*')
        .eq('enabled', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single()
        .then(({ data, error }) => {
        console.log('announcement data:', data);
        console.log('announcement error:', error);
        if (data) {
            setNotification(data);
            setShowNotification(true);
        }
        });
    }, []);

    const triggerLocalNotification = (title: string, description: string, secondayText: string | undefined, secondaryLink: string | undefined) => {
        setNotification({
        title: title,
        description: description,
        type: 'notice',
        primary_button_text: 'Got it',
        secondary_button_text: secondayText,
        secondary_button_link: secondaryLink,
        });
        setShowNotification(true);
    }

    return {
        showNotification,
        setShowNotification,
        notification,
        triggerLocalNotification
    };
}