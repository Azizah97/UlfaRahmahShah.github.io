function tampil(){
   
      if (formulir.nama.value == ""){
         alert("Nama harus diisi");
         formulir.nama.focus();
         return false;
      }
      
	  if (formulir.namap.value == ""){
         alert("Nama panggilan harus diisi");
         formulir.namap.focus();
         return false;
      }
	  
	  if (formulir.NIM.value == ""){
	      alert("NIM harus diisi");
		  formulir.NIM.focus();
		  return false;
	  }
	  
	  if (formulir.kelas.value == ""){
         alert("Kelas harus diisi");
         formulir.kelas.focus();
         return false;
      }
	  
	  if (formulir.HP.value == ""){
	      alert("Nomor HP harus diisi ;)" );
		  formulir.HP.focus();
		  return false;
	  }
	  
	  if (formulir.jk.value == ""){
         alert("Jenis kelamin harus dipilih");
         formulir.jk.focus();
         return false;
      }
	  
	  if (formulir.tempat.value == ""){
         alert("Tempat harus diisi");
         formulir.tempat.focus();
         return false;
      }
	  
	  if (formulir.tanggal.value == ""){
         alert("Tanggal harus dipilih");
         formulir.tanggal.focus();
         return false;
      }

      if (formulir.email.value == ""){
         alert("Email harus diisi");
         formulir.email.focus();
         return false;
      }	  
	  
	  if (formulir.url.value == ""){
         alert("Akun Sosmed harus diisi");
         formulir.url.focus();
         return false;
      }
	  
	  if (formulir.gambar.value == ""){
         alert("Foto harus diupload");
         formulir.gambar.focus();
         return false;
      }
	  
	  if (formulir.alamat.value == ""){
         alert("Alamat harus diisi");
         formulir.alamat.focus();
         return false;
      }
	  
	  if (formulir.hobi.value == ""){
         alert("Hobi harus diisi");
         formulir.hobi.focus();
         return false;
      }
	  
	  if (formulir.status.value == ""){
         alert("Status harus dipilih! :p");
         formulir.status.focus();
         return false;
      }
	 
}