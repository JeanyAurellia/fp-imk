import { ref, onMounted } from 'vue';

export function useProfile() {
  // State for form fields
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const address = ref('');
  const currentPassword = ref('');
  const newPassword = ref('');
  const confirmNewPassword = ref('');

  // Mock user profile data
  const userProfile = {
    firstName: 'IMK A',
    lastName: 'Kelompok 3',
    email: 'kel3@email.com',
    address: 'Jl. IT ITS',
  };

  // Function to reset the form to initial data
  const resetForm = () => {
    firstName.value = userProfile.firstName;
    lastName.value = userProfile.lastName;
    email.value = userProfile.email;
    address.value = userProfile.address;
    currentPassword.value = '';
    newPassword.value = '';
    confirmNewPassword.value = '';
  };

  // Automatically set form data when the component is mounted
  onMounted(() => {
    resetForm();
  });

  // Function to cancel changes
  const cancelChanges = () => {
    resetForm();
  };

  // Function to validate and save changes
  const saveChanges = () => {
    if (
      !firstName.value.trim() ||
      !lastName.value.trim() ||
      !email.value.trim() ||
      !address.value.trim() ||
      !currentPassword.value.trim() ||
      !newPassword.value.trim() ||
      !confirmNewPassword.value.trim()
    ) {
      alert('Semua field harus diisi sebelum menyimpan perubahan.');
      return;
    }

    if (newPassword.value !== confirmNewPassword.value) {
      alert('Password baru dan konfirmasi tidak cocok.');
      return;
    }

    // Simulate saving data to a backend
    console.log('Data disimpan:', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      newPassword: newPassword.value,
    });

    alert('Perubahan profil berhasil disimpan!');
    // Clear password fields after saving
    currentPassword.value = '';
    newPassword.value = '';
    confirmNewPassword.value = '';
  };

  // Function to sign out
  const signOut = () => {
    alert('Anda telah berhasil sign out.');
    // You can add redirection logic here
  };

  return {
    firstName,
    lastName,
    email,
    address,
    currentPassword,
    newPassword,
    confirmNewPassword,
    cancelChanges,
    saveChanges,
    signOut,
  };
}