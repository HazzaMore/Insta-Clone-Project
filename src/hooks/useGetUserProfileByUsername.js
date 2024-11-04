import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByUsername = (username) => {
	const [isLoading, setIsLoading] = useState(true);
	const showToast = useShowToast();
	const { userProfile, setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			try {
		const q = query(collection(firestore, "users"));
				const querySnapshot = await getDocs(q);

				let userDoc = null;
				querySnapshot.forEach((doc) => {
					const data = doc.data();
          // ensures that the username is not case sensitive when comparing searched user to the firestore user
					if (data.username.toLowerCase() === username.toLowerCase()) {
						userDoc = data;
					}
				});

				if (!userDoc) return setUserProfile(null);

				setUserProfile(userDoc);
				// console.log(userDoc);
			} catch (error) {
				showToast("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		getUserProfile();
	}, [setUserProfile, username, showToast]);

	return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
